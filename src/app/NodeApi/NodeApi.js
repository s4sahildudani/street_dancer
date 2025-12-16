const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000';

export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }
    
    return data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    // First check if user already exists
    const existingUsers = await fetch(`${BASE_URL}/users`);
    const users = await existingUsers.json();
    
    const userExists = users.find(user => user.email === userData.email);
    if (userExists) {
      throw new Error('User with this email already exists');
    }

    // Format the data according to the API requirements
    const formattedData = {
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      password: userData.password,
      confirmPassword: userData.password // Add this line to match API expectations
    };

    const response = await fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formattedData)
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to register user');
    }

    return { 
      success: true, 
      message: 'Registration successful! Please login.',
      user: data 
    };

  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

export const checkUser = async (credentials) => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    const users = await response.json();
    
    const user = users.find(user => 
      user.email === credentials.email && 
      user.password === credentials.password
    );
    
    if (user) {
      return { success: true, user };
    } else {
      throw new Error('Invalid email or password');
    }
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Demo APIs for testing
export const getDanceClasses = async (city = '') => {
  try {
    let url = `${BASE_URL}/danceclasses`
    if (city) url += `?city=${encodeURIComponent(city)}`
    const response = await fetch(url)
    const data = await response.json()
    if (!response.ok) {
      console.log(data.message || 'Failed to fetch classes')
    }
    return data
  } catch (error) {
    console.error('Fetch classes error:', error)
    throw error
  }
};

export const createDanceClass = async (classData) => {
  try {
    const response = await fetch(`${BASE_URL}/classes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(classData),
    });
    const data = await response.json();
    
    if (!response.ok) {
      console.log(data.message || 'Failed to create class');
    }
    
    return data;
  } catch (error) {
    console.error('Create class error:', error);
    throw error;
  }
};

export const getInstructors = async () => {
  try {
    const response = await fetch(`${BASE_URL}/instructors`);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch instructors');
    }
    
    return data;
  } catch (error) {
    console.error('Fetch instructors error:', error);
    throw error;
  }
};

export const getDanceForms = async () => {
  try {
    const response = await fetch(`${BASE_URL}/danceforms`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Fetch dance forms error:', error)
    return []
  }
};

export const handleApiError = (error) => {
  console.error('API Error:', error);
  return {
    error: true,
    message: error.message || 'Something went wrong',
  };
};