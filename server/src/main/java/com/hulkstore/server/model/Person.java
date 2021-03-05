package com.hulkstore.server.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Basic;
import javax.persistence.GeneratedValue;
import javax.persistence.CascadeType;
import javax.persistence.JoinColumn;
import javax.persistence.GenerationType;
import javax.persistence.Table;

@Entity
@Table(name = "person")
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;

    public String name;

    public String lastName;

    public Integer getId() {
        return this.id;
    }

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id", referencedColumnName = "role_id")
    public Role Role;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id", referencedColumnName = "user_id")
    public User User;

    public User getUser() {
        return this.User;
    }

    public Role getRole() {
        return this.Role;
    }

    public void setRole(Role Role) {
        this.Role = Role;
    }

    public void setUser(User User) {
        this.User = User;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

}