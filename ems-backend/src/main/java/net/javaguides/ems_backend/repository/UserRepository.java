package net.javaguides.ems_backend.repository;


import net.javaguides.ems_backend.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Users, Long > {

}
