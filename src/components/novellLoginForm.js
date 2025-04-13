import React, { useState } from 'react';

const NovellLoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    cityOfEmployment: '',
    webServer: '— Choose a server —',
    role: 'Guest',
    singleSignOn: {
      mail: false,
      payroll: false,
      selfService: false
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      singleSignOn: {
        ...formData.singleSignOn,
        [name]: checked
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleReset = () => {
    setFormData({
      username: '',
      password: '',
      cityOfEmployment: '',
      webServer: '— Choose a server —',
      role: 'Guest',
      singleSignOn: {
        mail: false,
        payroll: false,
        selfService: false
      }
    });
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Novell Services Login</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-3 items-center">
          <label htmlFor="username" className="text-right pr-4">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="col-span-2 border border-gray-300 p-1"
          />
        </div>

        <div className="grid grid-cols-3 items-center">
          <label htmlFor="password" className="text-right pr-4">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="col-span-2 border border-gray-300 p-1"
          />
        </div>

        <div className="grid grid-cols-3 items-center">
          <label htmlFor="cityOfEmployment" className="text-right pr-4">City of Employment:</label>
          <input
            type="text"
            id="cityOfEmployment"
            name="cityOfEmployment"
            value={formData.cityOfEmployment}
            onChange={handleInputChange}
            className="col-span-2 border border-gray-300 p-1"
          />
        </div>

        <div className="grid grid-cols-3 items-center">
          <label htmlFor="webServer" className="text-right pr-4">Web server:</label>
          <select
            id="webServer"
            name="webServer"
            value={formData.webServer}
            onChange={handleInputChange}
            className="col-span-2 border border-gray-300 p-1 bg-white"
          >
            <option>— Choose a server —</option>
            <option>Server 1</option>
            <option>Server 2</option>
            <option>Server 3</option>
          </select>
        </div>

        <div className="grid grid-cols-3 items-start mt-4">
          <div className="text-right pr-4">Please specify your role:</div>
          <div className="col-span-2 space-y-1">
            {['Admin', 'Engineer', 'Manager', 'Guest'].map((role) => (
              <div key={role}>
                <input
                  type="radio"
                  id={role.toLowerCase()}
                  name="role"
                  value={role}
                  checked={formData.role === role}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label htmlFor={role.toLowerCase()}>{role}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 items-start mt-4">
          <div className="text-right pr-4">Single Sign-on to the following:</div>
          <div className="col-span-2 space-y-1">
            {['mail', 'payroll', 'selfService'].map((service) => (
              <div key={service}>
                <input
                  type="checkbox"
                  id={service}
                  name={service}
                  checked={formData.singleSignOn[service]}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor={service}>
                  {service === 'selfService' ? 'Self-service' : service.charAt(0).toUpperCase() + service.slice(1)}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button type="submit" className="px-4 py-1 bg-gray-200 border border-gray-400">
            Login
          </button>
          <button type="button" onClick={handleReset} className="px-4 py-1 bg-gray-200 border border-gray-400">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default NovellLoginForm;
