package com.example.leavemanagement.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Leave {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String employeeName;
    private String reason;
    private LocalDate startDate;
    private LocalDate endDate;

    public Leave() {}

    public Leave(String employeeName, String reason, LocalDate startDate, LocalDate endDate) {
        this.employeeName = employeeName;
        this.reason = reason;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    // Getters and setters

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getEmployeeName() { return employeeName; }

    public void setEmployeeName(String employeeName) { this.employeeName = employeeName; }

    public String getReason() { return reason; }

    public void setReason(String reason) { this.reason = reason; }

    public LocalDate getStartDate() { return startDate; }

    public void setStartDate(LocalDate startDate) { this.startDate = startDate; }

    public LocalDate getEndDate() { return endDate; }

    public void setEndDate(LocalDate endDate) { this.endDate = endDate; }
}
