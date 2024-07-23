import React, { useContext } from 'react';
import { InputBox, InputField, InputLabel, RadioInput, RadioOption, RadioOptions, SelectField } from './StyleComponents.js/FormdataStyle';
import { Toggle } from '@fluentui/react/lib/Toggle';
import { AppContext } from './AppContext';

const Formdata = () => {
  const { formData, updateFormData } = useContext(AppContext);
  const { name, description, monitor, testUrl, request, isActive } = formData;

  const handleInputChange = (key, value) => {
    updateFormData(key, value);
  };

  return (
    <div>
      <div>
        <InputBox>
          <InputLabel>Name* :</InputLabel>
          <InputField
            type="text"
            value={name}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
        </InputBox>

        <InputBox>
          <InputLabel>Description:</InputLabel>
          <InputField
            type="text"
            value={description}
            onChange={(e) => handleInputChange('description', e.target.value)}
          />
        </InputBox>

        <InputBox>
          <InputLabel>Monitor* :</InputLabel>
          <SelectField
            value={monitor}
            onChange={(e) => handleInputChange('monitor', e.target.value)}>
            <option value="Object">Object</option>
            <option value="Emulated">Emulated</option>
            <option value="Mobile Playback">Mobile Playback</option>
            <option value="IE">IE</option>
            <option value="Chrome">Chrome</option>
            <option value="Edge">Edge</option>
          </SelectField>
        </InputBox>

        <InputBox>
          <InputLabel>Test URL* :</InputLabel>
          <InputField
            type="text"
            value={testUrl}
            onChange={(e) => handleInputChange('testUrl', e.target.value)}
          />
        </InputBox>

        <InputBox>
          <InputLabel>Request type* :</InputLabel>
          <RadioOptions>
            <RadioOption>
              <RadioInput
                type="radio"
                value="GET"
                checked={request === 'GET'}
                onChange={() => handleInputChange('request', 'GET')}
              />
              GET
            </RadioOption>
            <RadioOption>
              <RadioInput
                type="radio"
                value="POST"
                checked={request === 'POST'}
                onChange={() => handleInputChange('request', 'POST')}
              />
              POST
            </RadioOption>
          </RadioOptions>
        </InputBox>

        <InputBox>
          <InputLabel>Location*:</InputLabel>
          AAAAAA
        </InputBox>

        <InputBox>
          <InputLabel>Status*:</InputLabel>
          <Toggle
            checked={isActive}
            onChange={(e, checked) => handleInputChange('isActive', checked)}
            onText="Active"
            offText="Inactive"
          />
        </InputBox>
      </div>
    </div>
  );
};

export default Formdata;
