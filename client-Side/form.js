document.getElementById('formRegistration').addEventListener(
    'submit', async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        try {
            const response = await fetch('/user/register', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                const result = await response.text();
                console.log(result);
                alert('Registration successful!');
            } else {
                throw new Error('Registration failed');
            }
            } catch (error) {
            console.error('Error', error);
            alert('Registration failed. Please try again.');
        }
    });