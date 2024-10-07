package net.javaguides.ems_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UsersDto {
    private long id;
    private String firstName;
    private String lastName;
    private String description;
    private String gender;
    private String empId;
    private Long userPIN;
    private Boolean isActive;
    private String email;
    private Long phoneNumber;
    private String armedGuard;
    private String idCardIssueDate;
    private String idCardExpiryDate;
    private String pvc;
    private String roles;
    private String department;
    private String designation;

}
