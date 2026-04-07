package com.edwebinars.eduwebinars.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "webinars")
public class Webinar {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private String title;

	@Column(nullable = false, length = 2000)
	private String description;

	@Column(nullable = false)
	private String presenter;

	@Column(nullable = false)
	private LocalDateTime scheduledAt;

	@Column(nullable = false)
	private String meetingLink;

	@Column(nullable = false)
	private int maxAttendees;

	private int registeredCount = 0;

	@Column(nullable = false)
	private boolean isActive = true;

	private LocalDateTime createdAt = LocalDateTime.now();

	public Webinar() {}

	public Webinar(String title, String description, String presenter,
			LocalDateTime scheduledAt, String meetingLink, int maxAttendees) {
		this.title = title;
		this.description = description;
		this.presenter = presenter;
		this.scheduledAt = scheduledAt;
		this.meetingLink = meetingLink;
		this.maxAttendees = maxAttendees;
	}

	public Long getId() { return id; }
	public void setId(Long id) { this.id = id; }
	public String getTitle() { return title; }
	public void setTitle(String title) { this.title = title; }
	public String getDescription() { return description; }
	public void setDescription(String description) { this.description = description; }
	public String getPresenter() { return presenter; }
	public void setPresenter(String presenter) { this.presenter = presenter; }
	public LocalDateTime getScheduledAt() { return scheduledAt; }
	public void setScheduledAt(LocalDateTime scheduledAt) { this.scheduledAt = scheduledAt; }
	public String getMeetingLink() { return meetingLink; }
	public void setMeetingLink(String meetingLink) { this.meetingLink = meetingLink; }
	public int getMaxAttendees() { return maxAttendees; }
	public void setMaxAttendees(int maxAttendees) { this.maxAttendees = maxAttendees; }
	public int getRegisteredCount() { return registeredCount; }
	public void setRegisteredCount(int registeredCount) { this.registeredCount = registeredCount; }
	public boolean isActive() { return isActive; }
	public void setActive(boolean active) { isActive = active; }
	public LocalDateTime getCreatedAt() { return createdAt; }
	public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}