from django.contrib import admin
from .models import Comment

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ['author', 'text', 'date', 'likes']  # Customize the fields displayed in the admin list view
    # Add more customization as needed

