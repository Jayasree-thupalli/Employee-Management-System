package net.javaguides.ems_backend.service.Impl;

import lombok.AllArgsConstructor;

import net.javaguides.ems_backend.dto.UsersDto;
import net.javaguides.ems_backend.entity.Users;
import net.javaguides.ems_backend.exception.ResourceNotFoundException;
import net.javaguides.ems_backend.mapper.UsersMapper;
import net.javaguides.ems_backend.repository.UserRepository;
import net.javaguides.ems_backend.service.UsersService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
@AllArgsConstructor
public class UsersServiceImpl implements UsersService {

    private UserRepository userRepository;


    @Override
    public UsersDto createUser(UsersDto usersDto) {

        Users users = UsersMapper.mapToUsers(usersDto);
        Users savedUsers = userRepository.save(users);

        return UsersMapper.mapToUsers(savedUsers);

    }

    @Override
    public UsersDto getUserById(long userId) throws ResourceNotFoundException {

        Users users = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Users is not exists with given id : " + userId));
        return UsersMapper.mapToUsers(users);

    }

    public List<UsersDto> getAllUsers() throws ResourceNotFoundException {
        List<Users> users = userRepository.findAll();

        if (users.isEmpty()) {
            throw new ResourceNotFoundException("No users found");
        }

        // Initialize an empty list to store UsersDto objects
        List<UsersDto> usersDtoList = new ArrayList<>();

        // Iterate over the Users entities and map each one to UsersDto
        for (Users user : users) {
            UsersDto usersDto = UsersMapper.mapToUsers(user);
            usersDtoList.add(usersDto);
        }

        return usersDtoList;
    }

}
