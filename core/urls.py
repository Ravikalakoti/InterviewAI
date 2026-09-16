from django.contrib import admin
from django.urls import path, include
from interview import views as home_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home_views.home, name='home'),
    path('dashboard/', home_views.dashboard, name='dashboard'),
    path('accounts/', include('accounts.urls')),
    path('interview/', include('interview.urls')),
]
