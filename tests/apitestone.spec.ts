

import {test, expect} from '@playwright/test';

test('Check if the end point is working', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users?page=2');

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    

    expect(responseBody).toHaveProperty('page', 2);
    expect(responseBody).toHaveProperty('data');
    expect(Array.isArray(responseBody.data)).toBeTruthy();

}

);

test('create a new user in the database', async ({ request }) => {  

    const response = await request.post('https://reqres.in/api/users', {

    data:{
        name: "morpheus",
        job: "leader"
    }
    });

    expect(response.status()).toBe(201);
    const responseBody = await response.json();

    expect(responseBody).toHaveProperty('name', 'morpheus');
    expect(responseBody).toHaveProperty('job', 'leader');
    expect(responseBody).toHaveProperty('id');
    expect(responseBody).toHaveProperty('createdAt');
}
);

test('update a user in the database', async ({ request }) => {
    
        const response = await request.put('https://reqres.in/api/users/2', {
            data:{
                name: "morpheus",
                job: "zion resident"
            }
        });
    
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
    
        expect(responseBody).toHaveProperty('name', 'morpheus');
        expect(responseBody).toHaveProperty('job', 'zion resident');
        expect(responseBody).toHaveProperty('updatedAt');
    }
);

