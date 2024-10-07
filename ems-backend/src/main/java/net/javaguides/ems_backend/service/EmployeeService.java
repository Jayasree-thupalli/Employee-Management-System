package net.javaguides.ems_backend.service;


import net.javaguides.ems_backend.dto.EmployeeDto;
import net.javaguides.ems_backend.dto.LoginPwdDto;
import net.javaguides.ems_backend.exception.ResourceNotFoundException;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto loginEmployee(LoginPwdDto loginPwdDto) throws ResourceNotFoundException;

    EmployeeDto getEmployeeById(long employeeId) throws ResourceNotFoundException;

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployee(long employeeId, EmployeeDto updatedEmployee) throws ResourceNotFoundException;



}
