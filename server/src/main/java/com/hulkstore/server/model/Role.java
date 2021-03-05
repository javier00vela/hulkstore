package com.hulkstore.server.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Role {

    @Id
    public Integer id;
    public String name;

    public Integer getId() {
        return this.id;
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

}