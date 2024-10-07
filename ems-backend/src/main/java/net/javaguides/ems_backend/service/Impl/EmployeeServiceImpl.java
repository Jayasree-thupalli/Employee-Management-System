package net.javaguides.ems_backend.service.Impl;

import lombok.AllArgsConstructor;
import net.javaguides.ems_backend.dto.EmployeeDto;
import net.javaguides.ems_backend.dto.LoginPwdDto;
import net.javaguides.ems_backend.entity.Employee;
import net.javaguides.ems_backend.exception.ResourceNotFoundException;
import net.javaguides.ems_backend.mapper.EmployeeMapper;
import net.javaguides.ems_backend.repository.EmployeeRepository;
import net.javaguides.ems_backend.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapperToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto loginEmployee(LoginPwdDto loginPwdDto) throws ResourceNotFoundException {
        Employee employee = employeeRepository.findByEmailAndPassword(loginPwdDto.getEmail(), loginPwdDto.getPassword());
        if (employee == null) {
            throw new ResourceNotFoundException("Employee is not exists");
        }
        return EmployeeMapper.mapperToEmployeeDto(employee);
    }

    @Override
    public EmployeeDto getEmployeeById(long employeeId) throws ResourceNotFoundException {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Employee is not exists with given id : " + employeeId));

        return EmployeeMapper.mapperToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream()
                .map(EmployeeMapper::mapperToEmployeeDto)
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(long employeeId, EmployeeDto updatedEmployee) throws ResourceNotFoundException {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee is not exists with given id : " + employeeId));

        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setPassword(updatedEmployee.getPassword());
        employee.setCpassword(updatedEmployee.getCpassword());

        Employee updatedEmployeeObj = employeeRepository.save(employee);
        return EmployeeMapper.mapperToEmployeeDto(updatedEmployeeObj);
    }
}
