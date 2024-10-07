package net.javaguides.ems_backend.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name= "users" )


public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="Id")
    private long id;

    @Column(name="First_Name")
    private String firstName;

    @Column(name="Last_Name")
    private String lastName;

    @Column(name="Description")
    private String description;

    @Column(name="Gender")
    private String gender;

    @Column(name="Employee_ID")
    private String empId;

    @Column(name="Users_PIN")
    private Long userPIN;

    @Column(name="IsActive")
    private Boolean isActive;

    @Column(name="Email_ID")
    private String email;

    @Column(name="PhoneNumber")
    private Long phoneNumber;

    @Column(name="ArmedGuard")
    private String armedGuard;

    @Column(name="IdCardIssueDate")
    private String idCardIssueDate;

    @Column(name="IdCardExpiryDate")
    private String idCardExpiryDate;

    @Column(name="PVC")
    private String pvc;

    @Column(name="Roles")
    private String Roles;

    @Column(name="Department")
    private String Department;

    @Column(name="Designation")
    private String Designation;




}
