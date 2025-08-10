package com.example.leavemanagement.repository;

import com.example.leavemanagement.model.Leave;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeaveRepository extends JpaRepository<Leave, Long> {
}
