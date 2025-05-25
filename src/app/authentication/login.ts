interface LoginResponse {
    access_token: string;
    token_type: string;
  }
  
  interface LoginError {
    detail?: string;
  }
  
  interface LoginCredentials {
    username: string;  // This should be email or username
    password: string;
  }
  
  export async function loginUser(credentials: LoginCredentials): Promise<LoginResponse | LoginError> {
    const data = new URLSearchParams();
    data.append("username", credentials.username);
    data.append("password", credentials.password);
  
    try {
      const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data.toString(),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        // API returned an error
        return { detail: result.detail || "Login failed" };
      }
  
      // Successful login response
      return result as LoginResponse;
    } catch (error) {
      return { detail: "Network error or server unavailable" };
    }
  }
  