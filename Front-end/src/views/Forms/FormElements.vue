<script setup>
/** All Library Import */
import { reactive } from 'vue';
import { PageName } from '@/components/PageName';

/** All Instance */
PageName.value = 'Form Element';

/** All Variables */
const schema = reactive({
  required_input: 'required',
  email_input: 'email',
  number_input: 'min:1|max:1000',
  password_input: 'min:4|max:25',
  url_input: 'url'
})
</script>
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 justify-between gap-10">
    <!-- Form Elements One -->
    <div class="bg-white rounded-lg p-5 shadow-md">
      <vee-form :validation-schema="schema" validate-on-input>
        
        <!-- Basic Text Input -->
        <div class="mb-4">
          <label for="basic-input" class="block text-sm font-bold text-gray-700 mb-1.5">Basic Input</label>
          <vee-field type="text" name="basic_input" id="basic-input" class="block w-full p-2.5 rounded-md border border-gray-200 bg-gray-100 focus:outline-1 focus:outline-mainColor"/>
        </div>

        <!-- Placeholder Text Input -->
        <div class="mb-4">
          <label for="placeholder-input" class="block text-sm font-bold text-gray-700 mb-1.5">Placeholder Input</label>
          <vee-field type="text" name="placeholder_input" id="placeholder-input" class="block w-full p-2.5 rounded-md border border-gray-200 bg-gray-100 focus:outline-1 focus:outline-mainColor placeholder:text-sm" placeholder="Placeholder"/>
        </div>

        <!-- Required Input with Validation -->
        <div class="mb-4">
          <label for="required-input" class="block text-sm font-bold text-gray-700 mb-1.5">Required Input <span class="text-rose-400">*</span></label>
          <vee-field type="text" name="required_input" id="required-input" class="block w-full p-2.5 rounded-md border border-gray-200 bg-gray-100 focus:outline-1 focus:outline-mainColor placeholder:text-sm" placeholder="This Field Is Required" required />
          <ErrorMessage name="required_input" class="text-xs text-rose-500 font-semibold my-2" />
        </div>

        <!-- Email Input -->
        <div class="mb-4">
          <label for="email-input" class="block text-sm font-bold text-gray-700 mb-1.5">Email Input</label>
          <vee-field type="email" name="email_input" id="email-input" class="block w-full p-2.5 rounded-md border border-gray-200 bg-gray-100 focus:outline-1 focus:outline-mainColor placeholder:text-sm" placeholder="admin@gmail.com" />
          <ErrorMessage name="email_input" class="text-xs text-rose-500 font-semibold my-2" />
        </div>

        <!-- Number Input -->
        <div class="mb-4">
          <label for="number-input" class="block text-sm font-bold text-gray-700 mb-1.5">Number Input</label>
          <vee-field type="number" name="number_input" id="number-input" class="block w-full p-2.5 rounded-md border border-gray-200 bg-gray-100 focus:outline-1 focus:outline-mainColor placeholder:text-sm" placeholder="100" />
          <ErrorMessage name="number_input" class="text-xs text-rose-500 font-semibold my-2" />
        </div>

        <!-- Phone Input -->
        <div class="mb-4">
          <label for="phone-input" class="block text-sm font-bold text-gray-700 mb-1.5">Phone Input</label>
          <vee-field type="tel" name="phone_input" id="phone-input" class="block w-full p-2.5 rounded-md border border-gray-200 bg-gray-100 focus:outline-1 focus:outline-mainColor placeholder:text-sm" placeholder="+123456789" />
        </div>

        <!-- Password Input -->
        <div class="mb-4">
          <label for="password-input" class="block text-sm font-bold text-gray-700 mb-1.5">Password Input</label>
          <vee-field type="password" name="password_input" id="password-input" class="block w-full p-2.5 rounded-md border border-gray-200 bg-gray-100 focus:outline-1 focus:outline-mainColor placeholder:text-sm" placeholder="********" />
          <ErrorMessage name="password_input" class="text-xs text-rose-500 font-semibold my-2" />
        </div>

        <!-- Search Input -->
        <div class="mb-4">
          <label for="search-input" class="block text-sm font-bold text-gray-700 mb-1.5">Search Input</label>
          <vee-field type="search" name="search_input" id="search-input" class="block w-full p-2.5 rounded-md border border-gray-200 bg-gray-100 focus:outline-1 focus:outline-mainColor placeholder:text-sm" placeholder="Search..." />
        </div>

        <!-- Disabled Input -->
        <div class="mb-4">
          <label for="disabled-input" class="block text-sm font-bold text-gray-700 mb-1.5">Disabled Input</label>
          <vee-field type="text" name="disabled_input" id="disabled-input" class="block w-full p-2.5 rounded-md border border-gray-200 bg-gray-100 placeholder:text-sm" placeholder="Disabled" disabled />
        </div>

        <!-- Readonly Input -->
        <div class="mb-4">
          <label for="readonly-input" class="block text-sm font-bold text-gray-700 mb-1.5">Readonly Input</label>
          <vee-field type="text" name="readonly_input" id="readonly-input" class="block w-full p-2.5 rounded-md border border-gray-200 bg-gray-100 placeholder:text-sm" placeholder="Readonly" readonly />
        </div>

        <!-- Textarea -->
        <div class="mb-4">
          <label for="textarea" class="block text-sm font-bold text-gray-700 mb-1.5">Textarea Input</label>
          <textarea name="textarea" id="textarea" class="block w-full p-2.5 rounded-md border border-gray-200 bg-gray-100 placeholder:text-sm focus:outline-1 focus:outline-mainColor"></textarea>
        </div>

      </vee-form>
    </div>

    <!-- Form Elements Two -->
    <div class="bg-white rounded-lg p-5 shadow-md">
      <vee-form :validation-schema="schema" validate-on-input>

        <!-- Single Select Dropdown -->
        <div class="mb-4">
          <label for="select-option" class="block text-sm font-bold text-gray-700 mb-1.5">Select Option</label>
          <vee-field as="select" name="select_option" id="select-option" class="block w-full p-2.5 rounded-md border border-gray-200 bg-gray-100 cursor-pointer focus:outline-1 focus:outline-mainColor">
            <option value="">Select A Option</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </vee-field>
        </div>

        <!-- Multiple Select Dropdown -->
        <div class="mb-4">
          <label for="multiple-select" class="block text-sm font-bold text-gray-700 mb-1.5">Multiple Select</label>
          <vee-field as="select" name="multiple_select" id="multiple-select" class="block w-full p-2.5 rounded-md border border-gray-200 bg-gray-100 cursor-pointer focus:outline-1 focus:outline-mainColor" multiple>
            <option value="">Multiple Select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
          </vee-field>
        </div>

        <!-- Date Picker -->
        <div class="mb-4">
          <label for="date-input" class="block text-sm font-bold text-gray-700 mb-1.5">Date Input</label>
          <vee-field type="date" name="date_input" id="date-input" class="block w-full p-2.5 rounded-md border border-gray-200 bg-gray-100 placeholder:text-sm cursor-pointer focus:outline-1 focus:outline-mainColor" />
        </div>

        <!-- Week Picker -->
        <div class="mb-4">
          <label for="week-input" class="block text-sm font-bold text-gray-700 mb-1.5">Week Input</label>
          <vee-field type="week" name="week_input" id="week-input" class="block w-full p-2.5 rounded-md border border-gray-200 bg-gray-100 placeholder:text-sm cursor-pointer focus:outline-1 focus:outline-mainColor" />
        </div>

        <!-- Month Picker -->
        <div class="mb-4">
          <label for="month-input" class="block text-sm font-bold text-gray-700 mb-1.5">Month Input</label>
          <vee-field type="month" name="month_input" id="month-input" class="block w-full p-2.5 rounded-md border border-gray-200 bg-gray-100 placeholder:text-sm cursor-pointer focus:outline-1 focus:outline-mainColor" />
        </div>

        <!-- Time Picker -->
        <div class="mb-4">
          <label for="time-input" class="block text-sm font-bold text-gray-700 mb-1.5">Time Input</label>
          <vee-field type="time" name="time_input" id="time-input" class="block w-full p-2.5 rounded-md border border-gray-200 bg-gray-100 placeholder:text-sm cursor-pointer focus:outline-1 focus:outline-mainColor" />
        </div>

        <!-- Color Picker -->
        <div class="mb-4">
          <label for="color-input" class="block text-sm font-bold text-gray-700 mb-1.5">Color Input</label>
          <vee-field type="color" name="color_input" id="color-input" class="block w-full py-0.5 px-2.5 h-10 rounded-md border border-gray-200 bg-gray-100 placeholder:text-sm focus:outline-1 focus:outline-mainColor" value="#43b9b2" />
        </div>

        <!-- Range Slider -->
        <div class="mb-4">
          <label for="range-input" class="block text-sm font-bold text-gray-700 mb-1.5">Range</label>
          <vee-field type="range" name="range_input" id="range-input" class="block w-full p-2.5 rounded-md border border-gray-200 bg-gray-100 cursor-pointer focus:outline-0" />
        </div>

        <!-- URL Input -->
        <div class="mb-4">
          <label for="url-input" class="block text-sm font-bold text-gray-700 mb-1.5">Url Input</label>
          <vee-field type="url" name="url_input" id="url-input" class="block w-full p-2.5 rounded-md border border-gray-200 bg-gray-100 placeholder:text-sm focus:outline-1 focus:outline-mainColor" placeholder="https://example.com" />
          <ErrorMessage name="url_input" class="text-xs text-rose-500 font-semibold my-2" />
        </div>

        <!-- File Upload Input -->
        <div class="mb-4">
          <label for="file-input" class="block text-sm font-bold text-gray-700 mb-1.5">Upload File</label>
          <input type="file" name="file_input" id="file-input" class="block w-full p-2.5 rounded-md border border-gray-200 bg-gray-100 cursor-pointer focus:outline-0 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-300 file:text-gray-700 hover:file:bg-gray-400" />
        </div>

      </vee-form>
    </div>
  </div>


  <div class="bg-white rounded-lg p-5 shadow-md mt-10">
    <div class="grid grid-cols-1 md:grid-cols-2 justify-between gap-10">
        <!-- Form Elements Three -->
        <div class="">
          <h2 class="taxt-md font-bold mb-5">Checkbox Elements</h2>

          <!-- Basic Checkbox -->
          <div class="flex items-center mb-4">
            <input id="accept" type="checkbox" class="w-4 h-4 text-white bg-gray-100 accent-mainColor border-gray-300 rounded focus:outline-0 focus:ring-2 focus:ring-mainColor" />
            <label for="accept" class="ml-2 text-sm text-gray-700 font-medium cursor-pointer">I accept the terms and conditions</label>
          </div>

          <!-- Disabled Checkbox -->
          <h2 class="taxt-sm font-medium mb-2">Disabled</h2>
          <div class="flex items-center mb-4">
            <input id="disabled" type="checkbox" class="w-4 h-4 text-white bg-gray-100 accent-mainColor border-gray-300 rounded focus:outline-0 focus:ring-2 focus:ring-mainColor" disabled />
            <label for="disabled" class="ml-2 text-sm text-gray-700 font-medium cursor-pointer">Disabled</label>
          </div>

          <!-- Inline Checkbox -->
          <h2 class="taxt-sm font-medium mb-2">Inline</h2>
          <div class="grid grid-cols-2 justify-between gap-10">
            <div class="flex items-center mb-4">
              <input id="accept-one" type="checkbox" class="w-4 h-4 text-white bg-gray-100 accent-mainColor border-gray-300 rounded focus:outline-0 focus:ring-2 focus:ring-mainColor" />
              <label for="accept-one" class="ml-2 text-sm text-gray-700 font-medium cursor-pointer">I accept the terms and conditions</label>
            </div>
            <div class="flex items-center mb-4">
              <input id="accept-two" type="checkbox" class="w-4 h-4 text-white bg-gray-100 accent-mainColor border-gray-300 rounded focus:outline-0 focus:ring-2 focus:ring-mainColor" />
              <label for="accept-two" class="ml-2 text-sm text-gray-700 font-medium cursor-pointer">I accept the terms and conditions</label>
            </div>
          </div>

          <!-- Checkbox Color -->
          <h2 class="taxt-sm font-medium mb-2">Colors</h2>

          <!-- Default Checkbox -->
          <div class="flex items-center mb-2">
            <input id="default-checkbox" type="checkbox" class="w-4.5 h-4.5 bg-gray-100 shadow accent-mainColor border-gray-300 rounded focus:outline-0 focus:ring-2 focus:ring-mainColor" checked />
            <label for="default-checkbox" class="ml-2 text-sm text-gray-700 font-medium cursor-pointer">Default</label>
          </div>

          <!-- Success Checkbox (Green) -->
          <div class="flex items-center mb-2">
            <input id="success-checkbox" type="checkbox" class="w-4.5 h-4.5 bg-gray-100 shadow accent-green-600 border-gray-300 rounded focus:outline-0 focus:ring-2 focus:ring-green-600" checked />
            <label for="success-checkbox" class="ml-2 text-sm text-gray-700 font-medium cursor-pointer">Success</label>
          </div>

          <!-- Info Checkbox (Cyan) -->
          <div class="flex items-center mb-2">
            <input id="info-checkbox" type="checkbox" class="w-4.5 h-4.5 bg-gray-100 shadow accent-cyan-600 border-gray-300 rounded focus:outline-0 focus:ring-2 focus:ring-cyan-600" checked />
            <label for="info-checkbox" class="ml-2 text-sm text-gray-700 font-medium cursor-pointer">Info</label>
          </div>

          <!-- Secondary Checkbox (Purple) -->
          <div class="flex items-center mb-2">
            <input id="secondary-checkbox" type="checkbox" class="w-4.5 h-4.5 bg-gray-100 shadow accent-purple-600 border-gray-300 rounded focus:outline-0 focus:ring-2 focus:ring-purple-600" checked />
            <label for="secondary-checkbox" class="ml-2 text-sm text-gray-700 font-medium cursor-pointer">Secondary</label>
          </div>

          <!-- Warning Checkbox (Yellow) -->
          <div class="flex items-center mb-2">
            <input id="warning-checkbox" type="checkbox" class="w-4.5 h-4.5 bg-gray-100 shadow accent-yellow-600 border-gray-300 rounded focus:outline-0 focus:ring-2 focus:ring-yellow-600" checked />
            <label for="warning-checkbox" class="ml-2 text-sm text-gray-700 font-medium cursor-pointer">Warning</label>
          </div>

          <!-- Danger Checkbox (Red/Rose) -->
          <div class="flex items-center mb-2">
            <input id="danger-checkbox" type="checkbox" class="w-4.5 h-4.5 bg-gray-100 shadow accent-rose-600 border-gray-300 rounded focus:outline-0 focus:ring-2 focus:ring-rose-600" checked />
            <label for="danger-checkbox" class="ml-2 text-sm text-gray-700 font-medium cursor-pointer">Danger</label>
          </div>
        </div>

        <!-- Form Elements Four -->
        <div class="">
          <h2 class="taxt-md font-bold mb-5">Radio Elements</h2>

          <!-- Basic Radio -->
          <div class="flex items-center mb-4">
            <input id="radio" type="radio" class="w-4 h-4 text-white bg-gray-100 accent-mainColor focus:outline-0" />
            <label for="radio" class="ml-2 text-sm text-gray-700 font-medium cursor-pointer">Radio Select</label>
          </div>

          <!-- Disabled Radio -->
          <h2 class="taxt-sm font-medium mb-2">Disabled</h2>
          <div class="flex items-center mb-4">
            <input id="disabled" type="radio" class="w-4 h-4 text-white bg-gray-100 accent-mainColor focus:outline-0" disabled />
            <label for="disabled" class="ml-2 text-sm text-gray-700 font-medium cursor-pointer">Disabled</label>
          </div>

          <!-- Inline Radio -->
          <h2 class="taxt-sm font-medium mb-2">Inline</h2>
          <div class="grid grid-cols-2 justify-between gap-10">
            <div class="flex items-center mb-4">
              <input id="radio-one" name="radio_select" type="radio" class="w-4 h-4 text-white bg-gray-100 accent-mainColor focus:outline-0" />
              <label for="radio-one" class="ml-2 text-sm text-gray-700 font-medium cursor-pointer">Radio Select</label>
            </div>
            <div class="flex items-center mb-4">
              <input id="radio-two" name="radio_select" type="radio" class="w-4 h-4 text-white bg-gray-100 accent-mainColor focus:outline-0" />
              <label for="radio-two" class="ml-2 text-sm text-gray-700 font-medium cursor-pointer">Radio Select</label>
            </div>
          </div>

          <!-- Radio Color -->
          <h2 class="taxt-sm font-medium mb-2">Colors</h2>

          <!-- Default Radio -->
          <div class="flex items-center mb-2">
            <input id="default-radio" type="radio" class="w-4.5 h-4.5 bg-gray-100 shadow accent-mainColor focus:outline-0" checked />
            <label for="default-radio" class="ml-2 text-sm text-gray-700 font-medium cursor-pointer">Default</label>
          </div>

          <!-- Success Radio (Green) -->
          <div class="flex items-center mb-2">
            <input id="success-radio" type="radio" class="w-4.5 h-4.5 bg-gray-100 shadow accent-green-600 focus:outline-0" checked />
            <label for="success-radio" class="ml-2 text-sm text-gray-700 font-medium cursor-pointer">Success</label>
          </div>

          <!-- Info Radio (Cyan) -->
          <div class="flex items-center mb-2">
            <input id="info-radio" type="radio" class="w-4.5 h-4.5 bg-gray-100 shadow accent-cyan-600 focus:outline-0" checked />
            <label for="info-radio" class="ml-2 text-sm text-gray-700 font-medium cursor-pointer">Info</label>
          </div>

          <!-- Secondary Radio (Purple) -->
          <div class="flex items-center mb-2">
            <input id="secondary-radio" type="radio" class="w-4.5 h-4.5 bg-gray-100 shadow accent-purple-600 focus:outline-0" checked />
            <label for="secondary-radio" class="ml-2 text-sm text-gray-700 font-medium cursor-pointer">Secondary</label>
          </div>

          <!-- Warning Radio (Yellow) -->
          <div class="flex items-center mb-2">
            <input id="warning-radio" type="radio" class="w-4.5 h-4.5 bg-gray-100 shadow accent-yellow-600 focus:outline-0" checked />
            <label for="warning-radio" class="ml-2 text-sm text-gray-700 font-medium cursor-pointer">Warning</label>
          </div>

          <!-- Danger Radio (Red/Rose) -->
          <div class="flex items-center mb-2">
            <input id="danger-radio" type="radio" class="w-4.5 h-4.5 bg-gray-100 shadow accent-rose-600 focus:outline-0" checked />
            <label for="danger-radio" class="ml-2 text-sm text-gray-700 font-medium cursor-pointer">Danger</label>
          </div>
        </div>
    </div>
  </div>
</template>
