<template>
  <div>
    <Form ref="loginForm" :model="params" :rules="rules" inline>
      <FormItem prop="user">
        <Input type="text" v-model="params.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"/>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="params.password" placeholder="Password">
          <Icon type="ios-lock-outline" slot="prepend"/>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit(params)">Signin</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      params: {
        user: '',
        password: ''
      },
      rules: {
        user: [{ required: true, message: 'Please fill in the user name', trigger: 'blur' }],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 1, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (params) {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$store.dispatch('loginAuth', {'params': params})
        } else {
          this.$Message.error('Fail!')
        }
      })
    }
  }
}
</script>
