package com.example.leavemanagement.controller;

import com.example.leavemanagement.model.Leave;
import com.example.leavemanagement.service.LeaveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/leaves")
@CrossOrigin(origins = "*") // Important for frontend to connect
public class LeaveController {

    @Autowired
    private LeaveService leaveService;

    @PostMapping
    public Leave createLeave(@RequestBody Leave leave) {
        return leaveService.saveLeave(leave);
    }

    @GetMapping
    public List<Leave> getLeaves() {
        return leaveService.getAllLeaves();
    }
}
