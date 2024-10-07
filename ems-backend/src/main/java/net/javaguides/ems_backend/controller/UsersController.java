package net.javaguides.ems_backend.controller;

import lombok.AllArgsConstructor;

import net.javaguides.ems_backend.dto.UsersDto;
import net.javaguides.ems_backend.exception.ResourceNotFoundException;
import net.javaguides.ems_backend.service.UsersService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@AllArgsConstructor
@RestController
@CrossOrigin("*")
@RequestMapping("/api/users")
public class UsersController {

    private UsersService usersService;

    //Build add Users REST API
    @PostMapping
    public ResponseEntity<UsersDto> createUsers(@RequestBody UsersDto usersDto){
        UsersDto savedUsers = usersService.createUser(usersDto);
        return new ResponseEntity<>(savedUsers, HttpStatus.CREATED);

    }

    //Build Get Users REST API
    @GetMapping("{id}")
    public ResponseEntity<UsersDto> getUsersDto(@PathVariable("id") Long usersId) throws ResourceNotFoundException {
        UsersDto usersDto =  usersService.getUserById(usersId);
        return ResponseEntity.ok(usersDto);

    }

    // Build Get All Employees REST API
    @GetMapping
    public ResponseEntity<List<UsersDto>> getAllUsers() throws ResourceNotFoundException {
        List<UsersDto> users = usersService.getAllUsers();
        return ResponseEntity.ok(users);
    }

}
