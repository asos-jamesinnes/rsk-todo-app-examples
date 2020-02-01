from django.urls import path, include
from rest_framework.routers import DefaultRouter
from todobackend import views


router = DefaultRouter()
router.register(r'missions', views.MissionViewSet)
router.register(r'users', views.UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('login/', views.login_view),
    path('logout/', views.LogOut.as_view()),
    path('password/', views.UpdatePassword.as_view()),
]

