from django.db import models

class StudentProject(models.Model):
    group_no = models.IntegerField()
    roll_numbers = models.CharField(max_length=255)
    student_name = models.CharField(max_length=255)
    mentor = models.CharField(max_length=255)
    primary_sdg = models.CharField(max_length=255)
    project_title = models.CharField(max_length=255)
    project_description = models.TextField()

    def __str__(self):
        return f"Group {self.group_no}: {self.project_title}"
