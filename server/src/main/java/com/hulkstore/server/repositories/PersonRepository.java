package com.hulkstore.server.repositories;

import org.springframework.data.repository.CrudRepository;
import com.hulkstore.server.model.Person;

public interface PersonRepository extends CrudRepository<Person, String> {

}