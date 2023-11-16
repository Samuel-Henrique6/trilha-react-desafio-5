import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://buiavcbetxwvwdnbqlig.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1aWF2Y2JldHh3dndkbmJxbGlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxNjI4MzksImV4cCI6MjAxNTczODgzOX0.pZZ0a06O-OlMc0IP8DXrux21mhqjzjOU-hjnWLA9pww",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1aWF2Y2JldHh3dndkbmJxbGlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxNjI4MzksImV4cCI6MjAxNTczODgzOX0.pZZ0a06O-OlMc0IP8DXrux21mhqjzjOU-hjnWLA9pww"
    }
})