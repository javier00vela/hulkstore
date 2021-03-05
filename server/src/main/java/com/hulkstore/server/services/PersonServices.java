package com.hulkstore.server.services;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.hulkstore.server.model.Person;
import com.hulkstore.server.repositories.PersonRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonServices extends CrudRepository<Person, String> {

    @Autowired
    PersonRepository personRepository;

    @PersistenceContext
    private EntityManager entityManager;

    public List<Person> executeQuery(String query) {
        return entityManager.createNativeQuery(query).getResultList();
    }

    @Override
    public void deleteById(String id) {
        // TODO Auto-generated method stub

    }

    @Override
    public void delete(Person entity) {
        // TODO Auto-generated method stub

    }

    @Override
    public void deleteAll(Iterable<? extends Person> entities) {
        // TODO Auto-generated method stub

    }

    @Override
    public void deleteAll() {
        // TODO Auto-generated method stub

    }

    @Override
    public <S extends Person> S save(S entity) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public <S extends Person> Iterable<S> saveAll(Iterable<S> entities) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Optional<Person> findById(String id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public boolean existsById(String id) {
        // TODO Auto-generated method stub
        return false;
    }

    @Override
    public Iterable<Person> findAll() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Iterable<Person> findAllById(Iterable<String> ids) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public long count() {
        // TODO Auto-generated method stub
        return 0;
    }
}
