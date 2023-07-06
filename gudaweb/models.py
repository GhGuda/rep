from django.db import models

# Create your models here.

class Pictuers(models.Model):
    main_picture = models.ImageField(blank=True)
    about_picture = models.ImageField(blank=True)
    description = models.TextField(null=True)
    
    class Meta:
        verbose_name_plural = 'Pictures'

class Projects(models.Model):
    title = models.CharField(max_length=100)
    body = models.TextField(max_length=100)
    url = models.URLField(null=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = 'Projects'
