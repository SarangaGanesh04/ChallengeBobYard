# api_comments/management/commands/load_comments.py

import json
from django.core.management.base import BaseCommand
from api_comments.models import Comment

class Command(BaseCommand):
    help = 'Load comments data from JSON file'

    def handle(self, *args, **kwargs):
        with open('api_comments/fixtures/comments.json') as json_file:
            data = json.load(json_file)
            for comment_data in data:
                comment_fields = comment_data['fields']
                Comment.objects.create(
                    author=comment_fields['author'],
                    text=comment_fields['text'],
                    date=comment_fields['date'],
                    likes=comment_fields['likes'],
                    image=comment_fields['image']
                )
        self.stdout.write(self.style.SUCCESS('Comments data loaded successfully'))
