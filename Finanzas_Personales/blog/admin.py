from turtle import update
from django.contrib import admin
from .models import categoria, post

# Register your models here.

class PostAdmin(admin.ModelAdmin):
    readonly_field=('created', 'update')
    
admin.site.register(post, PostAdmin)

class categoriaAdmin(admin.ModelAdmin):
    readonly_field=('created', 'update')
    
admin.site.register(categoria, categoriaAdmin)