<?php
    class Registrar_model extends Connection {
        public function __construct() {
            parent::__construct();
        }

        public function registrarCliente($cliName, $cliLastname, $cliTipoDoc, $cliDoc, $cliLocation, $cliEmail, $cliUser, $cliPass) {
            $where = 'num_documento = :cliDoc or correo = :cliEmail or usuario = :cliUser';
            $param = array(
                'cliDoc' => $cliDoc,
                'cliEmail' => $cliEmail,
                'cliUser' => $cliUser,
            );
            $response = $this->db->select1('*', 'cliente', $where, $param);
            if (is_array($response)) {
                $response = $response['results'];
                if ($response == null) {
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
                        'cliPass' => password_hash($cliPass, PASSWORD_DEFAULT),
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

        public function registrarEmpleado($empName, $empLastname, $empUser, $empPass, $empTipo) {
            $where = 'usuario = :empUser';
            $param = array(
                'empUser' => $empUser,
            );
            $response = $this->db->select1('*', 'empleado', $where, $param);
            if (is_array($response)) {
                $response = $response['results'];
                if ($response == null) {
                    $value = '(Nombre, Apellido, usuario, contrasena, tipo_empleado) VALUES (
                        :empName, :empLastname, empUser, :empPass, :empTipo
                    )';
                    $param = array(
                        'empName' => $empName,
                        'empLastname' => $empLastname,
                        'empUser' => $empUser,
                        'empPass' => $empPass,
                        'empTipo' => 1,
                    );
                    $data = $this->db->insert('empleado', $value, $param);
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