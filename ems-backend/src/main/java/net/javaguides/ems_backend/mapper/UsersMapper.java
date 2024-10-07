package net.javaguides.ems_backend.mapper;


import net.javaguides.ems_backend.dto.UsersDto;
import net.javaguides.ems_backend.entity.Users;

public class UsersMapper {

    public static UsersDto mapToUsers(Users users){
        return new UsersDto(
                users.getId(),
                users.getFirstName(),
                users.getLastName(),
                users.getDescription(),
                users.getGender(),
                users.getEmpId(),
                users.getUserPIN(),
                users.getIsActive(),
                users.getEmail(),
                users.getPhoneNumber(),
                users.getArmedGuard(),
                users.getIdCardIssueDate(),
                users.getIdCardExpiryDate(),
                users.getPvc(),
                users.getRoles(),
                users.getDepartment(),
                users.getDesignation()

        );
    }

    public static Users mapToUsers(UsersDto usersDto){
        return new Users(
                usersDto.getId(),
                usersDto.getFirstName(),
                usersDto.getLastName(),
                usersDto.getDescription(),
                usersDto.getGender(),
                usersDto.getEmpId(),
                usersDto.getUserPIN(),
                usersDto.getIsActive(),
                usersDto.getEmail(),
                usersDto.getPhoneNumber(),
                usersDto.getArmedGuard(),
                usersDto.getIdCardIssueDate(),
                usersDto.getIdCardExpiryDate(),
                usersDto.getPvc(),
                usersDto.getRoles(),
                usersDto.getDepartment(),
                usersDto.getDesignation()
        );
    }


}


