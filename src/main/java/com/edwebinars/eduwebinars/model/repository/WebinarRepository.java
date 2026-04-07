package com.edwebinars.eduwebinars.model.repository;

import com.edwebinars.eduwebinars.model.Webinar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface WebinarRepository extends JpaRepository<Webinar, Long> {
	List<Webinar> findByIsActiveTrue();
	List<Webinar> findByPresenterContainingIgnoreCase(String presenter);
	List<Webinar> findByTitleContainingIgnoreCase(String title);
}