package net.javaguides.ems_backend.service;


import net.javaguides.ems_backend.dto.UsersDto;
import net.javaguides.ems_backend.exception.ResourceNotFoundException;

import java.util.List;

public interface UsersService {
    UsersDto createUser(UsersDto usersDto);
    UsersDto getUserById(long userId) throws ResourceNotFoundException;

    List<UsersDto> getAllUsers() throws ResourceNotFoundException;
}
 
 