<?php
    class Registrar_model extends Connection {
        public function __construct() {
            parent::__construct();
        }

        public function registrarCliente($cliName, $cliLastname, $cliTipoDoc, $cliDoc, $cliLocation, $cliEmail, $cliUser, $cliPass) {
            $where = 'correo = :cliEmail';
            $param = array('cliEmail' => $cliEmail);
            $response = $this->db->select1('*', 'cliente', $where, $param);
            if (is_array($response)) {
                $response = $response['results'];
                if (count($response) == 0) {
                    $value = '(num_documento, nombre, apellido, direccion, correo, usuario, contrasena, tipo_documento, tipo_cliente) VALUES (
                        :cliDoc, :cliName, :cliLastname, :cliLocation, :cliEmail, :cliUser, :cliPass, :cliTipoDoc, :cliTipo
                    )';
                    $param = array(
                        'cliDoc' => $cliDoc,
                        'cliName' => $cliName,
                        'cliLastname' => $cliLastname,
                        'cliLocation' => $cliLocation,
                        'cliEmail' => $cliEmail,
                        'cliUser' => $cliUser,
                        'cliPass' => $cliPass,
                        'cliTipoDoc' => $cliTipoDoc,
                        'cliTipo' => 1,
                    );
                    $data = $this->db->insert('cliente', $value, $param);
                    if ($data) return 0;
                    else return $data;
                } else {
                    return 1;
                }
            } else {
                return $response;
            }
        }
    }