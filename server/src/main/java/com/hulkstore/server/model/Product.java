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
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;

    public String name;

    public Integer amount;

    public String photo;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id", referencedColumnName = "person_id")
    public Person Person;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id", referencedColumnName = "category_id")
    public Category Category;

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

    public Integer getAmount() {
        return this.amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public String getPhoto() {
        return this.photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public Category getCategory() {
        return this.Category;
    }

    public void setCategory(Category Category) {
        this.Category = Category;
    }

    public Person getPerson() {
        return this.Person;
    }

    public void setPerson(Person Person) {
        this.Person = Person;
    }

}