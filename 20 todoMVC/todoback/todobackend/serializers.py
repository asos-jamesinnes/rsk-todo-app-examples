from rest_framework import serializers
from todobackend.models import Mission
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password


class MissionSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Mission
        fields = ('id', 'title', 'completed', 'owner')


class UserSerializer(serializers.ModelSerializer):
    missions = serializers.PrimaryKeyRelatedField(many=True, queryset=Mission.objects.all())
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'missions')

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
        )
        return user


class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)

    def validate_new_password(self, value):
        validate_password(value)
        return value
