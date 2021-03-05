package com.hulkstore.server.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.GeneratedValue;
import javax.persistence.CascadeType;
import javax.persistence.JoinColumn;
import javax.persistence.GenerationType;
import javax.persistence.Table;

@Entity
@Table(name = "cart")
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;

    public Integer amount;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id", referencedColumnName = "product_id")
    public Product Product;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id", referencedColumnName = "person_id")
    public Person Person;

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getAmount() {
        return this.amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public Product getProduct() {
        return this.Product;
    }

    public void setProduct(Product Product) {
        this.Product = Product;
    }

    public Person getPerson() {
        return this.Person;
    }

    public void setPerson(Person Person) {
        this.Person = Person;
    }

}