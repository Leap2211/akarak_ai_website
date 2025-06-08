interface SignUpResponse {
    access_token: string;
    token_type: string;
  }
  
  interface Error {
    detail?: string;
  }
  
  interface SignUpCredentials {
    email: string;
    password: string;
  }
  
  export async function loginUser(credentials: SignUpCredentials): Promise<SignUpResponse | Error> {
    try {
      const response = await fetch("http://192.168.224.247:8000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        // API returned an error (likely with a detail field)
        return { detail: result.detail || "Sign Up failed" };
      }
  
      // Successful login response
      return result as SignUpResponse;
    } catch (error) {
      return { detail: "Network error or server unavailable" };
    }
  }
  