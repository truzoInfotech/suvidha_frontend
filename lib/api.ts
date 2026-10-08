const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

type ApiResponse<T = any> = {
  success: boolean;
  message?: string;
  user?: T;
  token?: string;
};

export async function apiFetch<T = any>(
  path: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data?.message || `Request failed: ${res.status}`);
  }
  return data;
}

export const authApi = {
  signup: (body: { name: string; email: string; password: string }) =>
    apiFetch('/auth/signup', { method: 'POST', body: JSON.stringify(body) }),

  login: (body: { email: string; password: string }) =>
    apiFetch('/auth/login', { method: 'POST', body: JSON.stringify(body) }),

  logout: () => apiFetch('/auth/logout', { method: 'POST' }),

  me: () => apiFetch('/auth/me'),
};