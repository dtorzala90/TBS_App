# Generated by Django 2.2.6 on 2020-02-28 05:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('decision', '0003_session_title'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='session',
            name='title',
        ),
    ]
