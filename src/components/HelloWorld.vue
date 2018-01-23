<template>
	<div class="root">
		<div class="checkoutResultMoudle">
			<h3>点击姓名可查看相关成绩</h3>
			<div class="spanWrap"><span @click="resultIndex=0;">{{results1[0].name}}</span><span @click="resultIndex=1;">{{results1[1].name}}</span></div>
			<div class="result">
				<ul>
					<li>{{results1[resultIndex].name}}</li>
					<li>
						<ul v-for="(value,key) in results1[resultIndex].chengji">
							<li>
								<ul v-for="(value,key) in value">
									<li>{{key}}-----------{{value}}</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>

		<el-input v-model="userTel" placeholder="请输入手机号" class='input'></el-input>
		<el-input v-model="password" placeholder="请输入密码" class='input'></el-input>
		<el-button type="primary" round @click='sendAjaxGet'>sendAjaxGet</el-button>
		<el-button type="success" plain @click='sendAjaxpost'>sendAjaxpost</el-button>
		<router-link to="/test">
			<el-button type="primary" icon="el-icon-view" class='input'>testComponents</el-button>
		</router-link>
		<!--<router-link to="/Carousel"><el-button type="primary" icon="el-icon-view">CarouselComponents</el-button></router-link>-->
		<div class="testComponent">
			<el-button type="primary" icon="el-icon-view" @click='toCarousel'>CarouselComponents</el-button>
			<el-button type="" icon="el-icon-view" @click='toDGZTCComponent'>DGZTCComponents</el-button>
		</div>
		<br />
		<hr />
			<el-button type="primary" icon="el-icon-view" @click='toRandomStr'>RandomStrComponents</el-button>
		
		
	</div>
</template>

<script type="text/ecmascript-6">
	import qs from 'qs';
	export default {
		name: 'HelloWorld',
		data() {
			return {
				url: 'http://wubaoguo.zz598.cn/dgztc-web', // 保国域名
				userTel: '',
				password: '',
				verifyCode: '',
				results1: [{
						name: '小李',
						chengji: [{
								'chease': 80
							},
							{
								'math': 90
							},
							{
								'english': 80
							}
						]
					},
					{
						name: '小王',
						chengji: [{
								'chease': 10000
							},
							{
								'math': 90
							},
							{
								'english': 80
							}
						]
					}
				],
				resultIndex: 0
			}
		},
		methods: {
			toRandomStr(){
				this.$router.push({
					path:'RandomStr'
				})
			},
			toCarousel() {
				this.$router.push({
					path: 'Carousel',
					query: {
						id: 100
					}
				})
			},
			toDGZTCComponent() {
				this.$router.push({
					path: 'DGZTC',
					query: {}
				})
			},
			sendAjaxGet() {
				let _this = this;
				this.$ajax({
					method: 'get', //方法
					url: _this.url + '/open/sms/sendusersms', //地址
					//					headers: {'X-Requested-With': 'XMLHttpRequest'},
					params: {
						phonenum: _this.userTel
					},
					data: {},
				}).then((response) => {
					alert('success')
					console.log(response)
				}).catch((error) => {
					alert('fail')
					console.log(error)
				})
			},
			sendAjaxpost() {
				let _this = this;
				this.$ajax({
					method: 'post', //方法
					url: _this.url + '/h5/user/jobseeker/login',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
						'deviceId': window.navigator.userAgent,
						'authType': 'jobseeker_user'
					},
					data: qs.stringify({
						username: _this.userTel,
						password: _this.password,
						verifyCode: _this.verifyCode
					}),
					responseType: 'json'
				}).then((response) => {
					alert('sendAjaxpostsuccess')
					console.log(response)
				}).catch((error) => {
					alert('fail')
					console.log(error)
				})
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.checkoutResultMoudle {
		border: 1px solid #000;
		padding: 10px;
	}
	
	.spanWrap {
		margin: 0 auto;
		width: 60%;
		height: 60px;
		background-color: #0094ff;
		display: flex;
		justify-content: space-around;
		line-height: 60px;
	}
	
	span {
		width: 50%;
		border: 1px solid #000;
	}
	
	ul {
		padding: 0;
	}
	
	li {
		list-style: none;
	}
	
	.input {
		width: 50%;
		display: block;
		margin: 10px auto;
	}
	
	.testComponent {
		border: 1px solid #000;
		padding: 20px;
	}
	
	.testComponent button {
		width: 80%;
		margin: 10px;
	}
</style>