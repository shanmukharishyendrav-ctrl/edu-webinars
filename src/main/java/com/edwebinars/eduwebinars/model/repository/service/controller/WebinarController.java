package com.edwebinars.eduwebinars.model.repository.service.controller;

import com.edwebinars.eduwebinars.model.Webinar;
import com.edwebinars.eduwebinars.model.repository.service.WebinarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/webinars")
@CrossOrigin(origins = "http://localhost:5173")
public class WebinarController {

	@Autowired
	private WebinarService webinarService;

	@GetMapping
	public ResponseEntity<List<Webinar>> getAllWebinars() {
		return ResponseEntity.ok(webinarService.getAllWebinars());
	}

	@GetMapping("/active")
	public ResponseEntity<List<Webinar>> getActiveWebinars() {
		return ResponseEntity.ok(webinarService.getActiveWebinars());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Webinar> getWebinarById(@PathVariable Long id) {
		return webinarService.getWebinarById(id)
				.map(ResponseEntity::ok)
				.orElse(ResponseEntity.notFound().build());
	}

	@PostMapping
	public ResponseEntity<Webinar> createWebinar(@RequestBody Webinar webinar) {
		return new ResponseEntity<>(webinarService.createWebinar(webinar), HttpStatus.CREATED);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Webinar> updateWebinar(@PathVariable Long id, @RequestBody Webinar webinar) {
		return ResponseEntity.ok(webinarService.updateWebinar(id, webinar));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteWebinar(@PathVariable Long id) {
		webinarService.deleteWebinar(id);
		return ResponseEntity.noContent().build();
	}

	@GetMapping("/search/title")
	public ResponseEntity<List<Webinar>> searchByTitle(@RequestParam String title) {
		return ResponseEntity.ok(webinarService.searchByTitle(title));
	}

	@GetMapping("/search/presenter")
	public ResponseEntity<List<Webinar>> searchByPresenter(@RequestParam String presenter) {
		return ResponseEntity.ok(webinarService.searchByPresenter(presenter));
	}
}