<?php
    class Login_model extends Connection {
        public function __construct() {
            parent::__construct();
        }

        public function iniciarSesion($user, $pass) {
            $where = 'usuario = :User';
            $param = array('User' => $user);
            $response = $this->db->select('*', 'cliente', $where, $param);
            if (is_array($response)) {
                $response = $response['results'];
                if (count($response)) {

                    $response = $response[0];
                    if (password_verify($pass, $response['contrasena'])) {
                        $data = array(
                            'idcliente' => $response['idcliente'],
                            'num_documento' => $response['num_documento'],
                            'nombre' => $response['nombre'],
                            'apellido' => $response['apellido'],
                            'direccion' => $response['direccion'],
                            'correo' => $response['correo'],
                            'usuario' => $response['usuario'],
                            'contrasena' => $response['contrasena'],
                            'tipo_documento' => $response['tipo_documento'],
                            'tipo_cliente' => $response['tipo_cliente'],
                        );
                        Session::setSession('USER', $data);
    
                        return $data;
                    } else return array('idcliente' => 0);
                } else return array('idcliente' => 0);
            } else return $response;
        }
    }