<?php
    class Login_model extends Connection {
        function __construct() {
            parent::__construct();
        }

        function iniciarSesion($user, $pass) {
            $where = 'usuario = :User';
            $param = array('User' => $user);
            $response = $this->db->select1('*', 'cliente', $where, $param);
            if (is_array($response)) {
                $response = $response['results'];
                if (password_verify($pass, $response['contrasena'])) {
                    $data = array(
                        'idcliente' => $response['idcliente'],
                        'num_documento' => $response['num_documento'],
                        'nombre' => $response['nombre'],
                        'apellido' => $response['apellido'],
                        'apellido' => $response['direccion'],
                        'correo' => $response['correo'],
                        'usuario' => $response['usuario'],
                        'contrasena' => $response['contrasena'],
                        'tipo_documento' => $response['tipo_documento'],
                        'tipo_cliente' => $response['tipo_cliente'],
                    );
                    Session::setSession('USER', $data);

                    return $data;
                } else {
                    $data = array(
                        'idcliente' => 0
                    );
                    return $data;
                }
            } else return $response;
        }
    }