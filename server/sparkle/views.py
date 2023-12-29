from django.contrib.auth import authenticate
from django.shortcuts import render
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserSerializer
# Create your views here.
def get_auth_token(user):
    refresh=RefreshToken.for_user(user)
    return {
        'user':UserSerializer(user).data,
        'refresh':str(refresh),    
        'access':str(refresh.access_token),
    }

class SignInView(APIView):
        def get(self,request):
            return Response(status=200)

        def post(self,request):
            username=request.data.get('username')
            password=request.data.get('password')
            if not username or not password:
                return Response(status=400)
            
            user=authenticate(username=username,password=password)
            if not user:
                return Response(status=401)
            
            user_data=get_auth_token(user)
            return Response(user_data)
           
