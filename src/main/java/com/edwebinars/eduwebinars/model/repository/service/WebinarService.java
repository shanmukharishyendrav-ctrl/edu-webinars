package com.edwebinars.eduwebinars.model.repository.service;

import com.edwebinars.eduwebinars.model.Webinar;
import com.edwebinars.eduwebinars.model.repository.WebinarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class WebinarService {

	@Autowired
	private WebinarRepository webinarRepository;

	public List<Webinar> getAllWebinars() {
		return webinarRepository.findAll();
	}

	public List<Webinar> getActiveWebinars() {
		return webinarRepository.findByIsActiveTrue();
	}

	public Optional<Webinar> getWebinarById(Long id) {
		return webinarRepository.findById(id);
	}

	public Webinar createWebinar(Webinar webinar) {
		return webinarRepository.save(webinar);
	}

	public Webinar updateWebinar(Long id, Webinar webinar) {
		webinar.setId(id);
		return webinarRepository.save(webinar);
	}

	public void deleteWebinar(Long id) {
		webinarRepository.deleteById(id);
	}

	public List<Webinar> searchByTitle(String title) {
		return webinarRepository.findByTitleContainingIgnoreCase(title);
	}

	public List<Webinar> searchByPresenter(String presenter) {
		return webinarRepository.findByPresenterContainingIgnoreCase(presenter);
	}
}