

async function fetchUserData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const usersData = await response.json();

    
    const modifiedUsers = usersData.map(user => ({
      Name: user.name,
      Username: user.username,
      Email: user.email,
      Address: user.address.street,
      Phone: user.phone,
      Website: user.website,
      Company: user.company.name,
    }));

    
    console.log('Modified Users Data:');
    console.log(modifiedUsers);

    
    const filteredUsers = modifiedUsers.filter(user => user.Email.endsWith('.biz'));

    
    console.log('Filtered Users with .biz Domain Emails:');
    console.log(filteredUsers);

    
    modifiedUsers.sort((a, b) => a.Name.localeCompare(b.Name));

    
    console.log('Sorted Users by Name:');
    console.log(modifiedUsers);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}


fetchUserData();
