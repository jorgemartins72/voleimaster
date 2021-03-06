import { extend } from "vee-validate";
import { required, email, min, length } from "vee-validate/dist/rules";

extend('email', {
	...email,
	message: "Informe um e-mail válido"
})

extend('length', length)

extend("required", {
	...required,
	message: "Este campo é obrigatório"
})

extend("min", {
	...min,
	message: "Texto muito curto"
})

extend('nome_sobrenome', value => {
	if(value.trim().split(' ').length >= 2){
		return true
	}
	return 'Informe Nome e Sobrenome';
});

extend('msg_curta', value => {
	if(value.split(' ').length >= 3){
		return true
	}
	return 'O texto da mensagem é curto';
});

