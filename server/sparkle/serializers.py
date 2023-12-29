from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields =['username', 'first_name', 'last_name', 'thumbnail']

class SignUpSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = [
			'username',
			'first_name',
			'last_name',
			'password'
		]
		extra_kwargs = {
			'password': {
				# Ensures that when serializing, this field will be excluded
				'write_only': True
			}
		}

	def create(self, data):
		# Clean all values, set as lowercase
		username   = data['username'].lower()
		first_name = data['first_name'].lower()
		last_name  = data['last_name'].lower()
		# Create new user
		user = User.objects.create(
			username=username,
			first_name=first_name,
			last_name=last_name
		)
		password = data['password']
		user.set_password(password)
		user.save()
		return user
