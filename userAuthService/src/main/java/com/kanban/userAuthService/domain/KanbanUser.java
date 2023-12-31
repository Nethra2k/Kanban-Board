package com.kanban.userAuthService.domain;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class KanbanUser {
    @Id
    private String email;
    private String password;

    public KanbanUser() {
    }

    public KanbanUser(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "KanbanUser{" +
                "email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
