<script setup>
/** All Library Import */
import { ref, reactive } from 'vue';
import { PageName } from '@/components/PageName';

/** All Instance */
PageName.value = 'Form Group';

/** All Variables */
const schema = reactive({
  
})
const showPassword = ref(false)
const files = ref([])

/** All Method */
const togglePassword = () => {
  showPassword.value = !showPassword.value
}
</script>
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 justify-between gap-10">
    <!-- Form Group One -->
    <div class="bg-white rounded-lg p-5 shadow-md">
      <vee-form :validation-schema="schema" validate-on-input>
        <!-- Basic Group -->
        <div class="mb-5">
          <label for="basic-group" class="block text-sm font-bold text-gray-700 mb-1.5">Basic Group</label>
          <div class="flex">
            <div class="bg-gray-200 py-2 px-3 rounded-l-md flex items-center justify-center shadow-sm">
              <span class="text-gray-600 font-medium">@</span>
            </div>
            <vee-field type="text" name="basic_group" id="basic-group" class="block w-full p-2.5 rounded-r-md border border-gray-200 bg-gray-50 focus:outline-1 focus:outline-mainColor placeholder:text-sm" placeholder="Username"/>
          </div>
        </div>

        <!-- Password Group -->
        <div class="mb-5">
          <label for="password-group" class="block text-sm font-bold text-gray-700 mb-1.5">Password Group</label>
          <div class="flex">
            <vee-field :type="showPassword ? 'text' : 'password'" name="password_group" id="password-group" class="block w-full p-2.5 rounded-l-md border border-gray-200 bg-gray-50 focus:outline-1 focus:outline-mainColor placeholder:text-sm" placeholder="********" />
            <div class="bg-gray-200 py-2 px-3 rounded-r-md flex items-center justify-center shadow-sm cursor-pointer" @click="togglePassword">
              <span class="text-gray-600 font-medium"><font-awesome-icon :icon="['fas', showPassword ? 'eye-slash' : 'eye']" /></span>
            </div>
          </div>
        </div>

        <!-- Email Group -->
        <div class="mb-5">
          <label for="email-group" class="block text-sm font-bold text-gray-700 mb-1.5">Email Group</label>
          <div class="flex">
            <vee-field type="email" name="email_group" id="email-group" class="block w-full p-2.5 rounded-l-md border border-gray-200 bg-gray-50 focus:outline-1 focus:outline-mainColor placeholder:text-sm" placeholder="Recipient's username"/>
            <div class="bg-gray-200 py-2 px-3 rounded-r-md flex items-center justify-center shadow-sm">
              <span class="text-gray-600 font-medium">@example.com</span>
            </div>
          </div>
        </div>

        <!-- Url Group -->
        <div class="mb-5">
          <label for="url-group" class="block text-sm font-bold text-gray-700 mb-1.5">Url Group</label>
          <div class="flex">
            <div class="bg-gray-200 py-2 px-3 rounded-l-md flex items-center justify-center shadow-sm">
              <span class="text-gray-600 font-medium">https://example.com/</span>
            </div>
            <vee-field type="url" name="url_group" id="url-group" class="block w-full p-2.5 rounded-r-md border border-gray-200 bg-gray-50 focus:outline-1 focus:outline-mainColor placeholder:text-sm" placeholder="Url"/>
          </div>
        </div>

        <!-- Number Group -->
        <div class="mb-5">
          <label for="number-group" class="block text-sm font-bold text-gray-700 mb-1.5">Number Group</label>
          <div class="flex">
            <div class="bg-gray-200 py-2 px-3 rounded-l-md flex items-center justify-center shadow-sm">
              <span class="text-gray-600 font-medium">$</span>
            </div>
            <vee-field type="number" name="number_group" id="number-group" class="block w-full p-2.5 border border-gray-200 bg-gray-50 focus:outline-1 focus:outline-mainColor placeholder:text-sm" placeholder="Amount"/>
            <div class="bg-gray-200 py-2 px-3 rounded-r-md flex items-center justify-center shadow-sm">
              <span class="text-gray-600 font-medium">0.0</span>
            </div>
          </div>
        </div>

      </vee-form>
    </div>

    <!-- Form Group Two -->
    <div class="bg-white rounded-lg p-5 shadow-md">
      <vee-form :validation-schema="schema" validate-on-input>

        <!-- Checkbox Group -->
        <div class="mb-5">
          <label for="checkbox-group" class="block text-sm font-bold text-gray-700 mb-1.5">Checkbox Group</label>
          <div class="flex">
            <div class="bg-gray-200 py-2 px-3 rounded-l-md flex items-center justify-center shadow-sm cursor-pointer">
              <input id="checkbox-group" type="checkbox" class="w-4.5 h-4.5 text-white bg-gray-100 accent-mainColor border-gray-300 rounded focus:outline-0 focus:ring-2 focus:ring-mainColor" />
            </div>
            <vee-field type="text" name="checkbox_group" id="checkbox-group" class="block w-full p-2.5 border border-gray-200 rounded-r-md bg-gray-50 focus:outline-1 focus:outline-mainColor placeholder:text-sm" />
          </div>
        </div>

        <!-- Radio Group -->
        <div class="mb-5">
          <label for="radio-group" class="block text-sm font-bold text-gray-700 mb-1.5">Radio Group</label>
          <div class="flex">
            <div class="bg-gray-200 py-2 px-3 rounded-l-md flex items-center justify-center shadow-sm cursor-pointer">
              <input id="radio-group" type="radio" class="w-4.5 h-4.5 text-white bg-gray-100 accent-mainColor focus:outline-0 " />
            </div>
            <vee-field type="text" name="radio_group" id="radio-group" class="block w-full p-2.5 border border-gray-200 rounded-r-md bg-gray-50 focus:outline-1 focus:outline-mainColor placeholder:text-sm" />
          </div>
        </div>

        <!-- Select Group -->
        <div class="mb-5">
          <label for="select-group" class="block text-sm font-bold text-gray-700 mb-1.5">Select Group</label>
          <div class="flex">
            <vee-field as="select" name="select_option" id="select-option" class="block p-2.5 rounded-l-md border border-gray-200 bg-gray-200 cursor-pointer focus:outline-1 focus:outline-mainColor">
                <option value="">Select A Option</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </vee-field>
            <vee-field type="text" name="select_group" id="select-group" class="block w-full p-2.5 border border-gray-200 rounded-r-md bg-gray-50 focus:outline-1 focus:outline-mainColor placeholder:text-sm" />
          </div>
        </div>

        <!-- Button Group -->
        <div class="mb-5">
          <label for="button-group" class="block text-sm font-bold text-gray-700 mb-1.5">Button Group</label>
          <div class="flex">
            <vee-field type="text" name="button_group" id="button-group" class="block w-full p-2.5 border border-gray-200 rounded-l-md bg-gray-50 focus:outline-1 focus:outline-mainColor placeholder:text-sm" />
            <button class="py-2.5 px-6 border-2 border-mainColor rounded-r-md text-mainColor font-semibold cursor-pointer focus:outline-0" type="submit">Button</button>
          </div>
        </div>

        <!-- Textarea Group -->
        <div class="mb-5">
          <label for="textarea-group" class="block text-sm font-bold text-gray-700 mb-1.5">Textarea Group</label>
          <div class="flex">
            <div class="bg-gray-200 py-2 px-3 rounded-l-md flex items-center justify-center shadow-sm">
              <span class="text-gray-600 font-medium">Textarea</span>
            </div>
            <textarea name="textarea_group" id="textarea-group" class="block w-full p-2.5 rounded-r-md border border-gray-200 bg-gray-50 focus:outline-1 focus:outline-mainColor placeholder:text-sm"></textarea>
          </div>
        </div>
      </vee-form>
    </div>
  </div>


  <div class="bg-white rounded-lg p-5 shadow-md mt-10">
    <!-- Form Group Three -->
    <h2 class="taxt-md font-bold mb-5">Layout System</h2>

    <!-- Three Column -->
    <div class="grid grid-cols-1 md:grid-cols-3 justify-between gap-5">

        <!-- Text Input -->
        <div class="mb-5">
          <label for="text-input" class="block text-sm font-bold text-gray-700 mb-1.5">Username</label>
          <vee-field type="text" name="text_input" id="text-input" class="block w-full p-2.5 rounded-md border border-gray-200 bg-gray-100 focus:outline-1 focus:outline-mainColor placeholder:text-sm" placeholder="Username"/>
        </div>

        <!-- Email Input -->
        <div class="mb-5">
          <label for="email-input" class="block text-sm font-bold text-gray-700 mb-1.5">Email</label>
          <vee-field type="email" name="text_input" id="email-input" class="block w-full p-2.5 rounded-md border border-gray-200 bg-gray-100 focus:outline-1 focus:outline-mainColor placeholder:text-sm" placeholder="Email"/>
        </div>

        <!-- Phone Input -->
        <div class="mb-5">
          <label for="phone-input" class="block text-sm font-bold text-gray-700 mb-1.5">Phone</label>
          <vee-field type="tel" name="text_input" id="phone-input" class="block w-full p-2.5 rounded-md border border-gray-200 bg-gray-100 focus:outline-1 focus:outline-mainColor placeholder:text-sm" placeholder="Phone"/>
        </div>
    </div> 

    <!-- Two Column -->
    <div class="grid grid-cols-1 md:grid-cols-2 justify-between gap-5">

        <!-- Password Input -->
        <div class="mb-5">
          <label for="password-input" class="block text-sm font-bold text-gray-700 mb-1.5">Password</label>
          <vee-field type="text" name="password_input" id="password-input" class="block w-full p-2.5 rounded-md border border-gray-200 bg-gray-100 focus:outline-1 focus:outline-mainColor placeholder:text-sm" placeholder="********"/>
        </div>

        <!-- Password Input -->
        <div class="mb-5">
          <label for="password-confirm-input" class="block text-sm font-bold text-gray-700 mb-1.5">Confirm Password</label>
          <vee-field type="text" name="password_confirm_input" id="password-confirm-input" class="block w-full p-2.5 rounded-md border border-gray-200 bg-gray-100 focus:outline-1 focus:outline-mainColor placeholder:text-sm" placeholder="********"/>
        </div>
    </div> 

    <!-- One Column -->
    <div class="mb-5">
        <label for="password-confirm-input" class="block text-sm font-bold text-gray-700 mb-1.5">Bio</label>
        <textarea name="textarea-input" id="textarea-group" class="block w-full p-2.5 rounded-r-md border border-gray-200 bg-gray-50 focus:outline-1 focus:outline-mainColor placeholder:text-sm" placeholder="Your Bio"></textarea>
    </div>
  </div>

  <!-- File Upload -->
  <div class="bg-white rounded-lg p-5 shadow-md mt-10">
    <h2 class="taxt-md font-bold mb-5">File Upload</h2>
    <FilePond 
      name="file"
      allow-multiple="true"
      max-file-size="2MB"
      accepted-file-types="image/png, image/jpeg"
      label-idle="Drop files or <span class='filepond--label-action'>Browse</span>"
      :files="files"
      @update:files="files = $event"
    />
  </div>
</template>
