import React, { useState, useEffect } from "react";
import { 
  Box, 
  Avatar, 
  Paper, 
  TextField, 
  RadioGroup, 
  FormControlLabel, 
  Radio, 
  InputAdornment, 
  IconButton, 
  Button, 
  Tabs, 
  Tab, 
  Typography,
  Container,
  Stack,
  Divider,
  Alert,
  Snackbar
} from "@mui/material";
import Grid from "@mui/material/Grid";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import Header from "../components/Header";
import UserService from "../services/userService";

const ProfilePage = () => {
  const [tab, setTab] = useState(0);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    fullName: ""
  });

  // Şifre değiştirme için state
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  // Mesaj state'leri
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Kullanıcı bilgilerini yükle
  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      setLoading(true);
      const userData = await UserService.getUser(1); // Geçici olarak userId 1
      setFormData({
        username: userData.username || "",
        email: userData.email || "",
        fullName: userData.fullName || ""
      });
    } catch (error) {
      console.error("Error loading user data:", error);
      setErrorMessage("Kullanıcı bilgileri yüklenirken hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handlePasswordChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      await UserService.updateProfile(1, formData); // Geçici olarak userId 1
      setSuccessMessage("Profil bilgileri başarıyla güncellendi!");
    } catch (error: any) {
      console.error("Error updating profile:", error);
      setErrorMessage(`Profil güncellenirken hata: ${error.message || "Bilinmeyen hata"}`);
    } finally {
      setLoading(false);
    }
  };

  // Şifre değiştirme fonksiyonu
  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setErrorMessage("Yeni şifreler eşleşmiyor!");
      return;
    }

    if (passwordData.newPassword.length < 6) {
      setErrorMessage("Yeni şifre en az 6 karakter olmalıdır!");
      return;
    }

    try {
      setLoading(true);
      await UserService.updatePassword(1, {
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword
      });
      
      setSuccessMessage("Şifre başarıyla güncellendi!");
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      });
    } catch (error: any) {
      console.error("Error updating password:", error);
      setErrorMessage(`Şifre güncellenirken hata: ${error.message || "Bilinmeyen hata"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <Box 
        sx={{ 
          height: { xs: "calc(100vh - 56px)", md: "calc(100vh - 64px)" }, 
          background: "#f5f7fb",
          py: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center" }}>
          <Paper 
            elevation={8} 
            sx={{ 
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              width: "100%",
              maxWidth: 1000,
              mx: "auto",
              height: "100%"
            }}
          >
            <Grid container sx={{ height: "100%" }}>
              {/* Sol Sidebar */}
              <Grid size={{ xs: 12, md: 3 }}>
                <Box 
                  sx={{ 
                    bgcolor: "#f8f9fa",
                    p: 3,
                    height: "100%",
                    borderRight: "1px solid #e0e0e0"
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: "#1976d2" }}>
                    Hesap Ayarları
                  </Typography>
                  <Tabs
                    orientation="vertical"
                    value={tab}
                    onChange={(_, v) => setTab(v)}
                    sx={{
                      "& .MuiTab-root": {
                        alignItems: "flex-start",
                        textAlign: "left",
                        minHeight: 48,
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        color: "#666",
                        "&.Mui-selected": {
                          color: "#1976d2",
                          bgcolor: "rgba(25, 118, 210, 0.08)",
                          borderRadius: 1
                        }
                      }
                    }}
                  >
                    <Tab label="Kişisel Bilgiler" />
                    <Tab label="Şifre Değiştir" />
                  </Tabs>
                </Box>
              </Grid>

              {/* Sağ İçerik */}
              <Grid size={{ xs: 12, md: 9 }}>
                <Box sx={{ p: { xs: 3, md: 4 }, height: "100%" }}>
                  {tab === 0 && (
                    <Box>
                      <Typography variant="h5" sx={{ mb: 4, fontWeight: 600, color: "#333" }}>
                        Kişisel Bilgiler
                      </Typography>
                      
                      {/* Profil Fotoğrafı Bölümü */}
                      <Box sx={{ mb: 4 }}>
                        <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 3 }}>
                          <Box position="relative">
                            <Avatar 
                              sx={{ 
                                width: 120, 
                                height: 120,
                                border: "4px solid #fff",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                              }} 
                            />
                            <IconButton 
                              color="primary" 
                              disabled 
                              sx={{ 
                                position: "absolute", 
                                bottom: 0, 
                                right: 0, 
                                bgcolor: "white",
                                border: "2px solid #1976d2"
                              }}
                            >
                              <PhotoCamera fontSize="small" />
                            </IconButton>
                          </Box>
                          <Stack spacing={2}>
                            <Button 
                              variant="contained" 
                              startIcon={<PhotoCamera />}
                              disabled
                              sx={{ bgcolor: "#1976d2" }}
                            >
                              Resim Yükle
                            </Button>
                            <Button 
                              variant="outlined" 
                              color="error" 
                              startIcon={<DeleteIcon />}
                              disabled
                            >
                              Resmi Sil
                            </Button>
                          </Stack>
                        </Stack>
                      </Box>

                      <Divider sx={{ mb: 4 }} />

                      {/* Form Alanları */}
                      <form onSubmit={handleSave}>
                        <Grid container spacing={3}>
                          <Grid size={{ xs: 12, md: 6 }}>
                            <TextField 
                              label="Kullanıcı Adı *" 
                              fullWidth 
                              required 
                              value={formData.username}
                              onChange={handleInputChange("username")}
                              disabled={loading}
                              sx={{ 
                                "& .MuiOutlinedInput-root": {
                                  "&:hover fieldset": { borderColor: "#1976d2" }
                                }
                              }}
                            />
                          </Grid>
                          <Grid size={{ xs: 12, md: 6 }}>
                            <TextField 
                              label="Ad Soyad" 
                              fullWidth 
                              value={formData.fullName}
                              onChange={handleInputChange("fullName")}
                              disabled={loading}
                            />
                          </Grid>
                          <Grid size={{ xs: 12 }}>
                            <TextField 
                              label="E-posta *" 
                              fullWidth 
                              required 
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange("email")}
                              disabled={loading}
                            />
                          </Grid>
                        </Grid>

                        <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
                          <Button 
                            variant="contained" 
                            color="primary" 
                            size="large"
                            type="submit"
                            disabled={loading}
                            startIcon={<SaveIcon />}
                            sx={{ 
                              px: 4,
                              py: 1.5,
                              fontSize: "1.1rem",
                              fontWeight: 600,
                              bgcolor: "#1976d2",
                              "&:hover": { bgcolor: "#1565c0" }
                            }}
                          >
                            {loading ? "Kaydediliyor..." : "Kaydet"}
                          </Button>
                        </Box>
                      </form>
                    </Box>
                  )}

                  {tab === 1 && (
                    <Box maxWidth={500}>
                      <Typography variant="h5" sx={{ mb: 4, fontWeight: 600, color: "#333" }}>
                        Şifre Değiştir
                      </Typography>
                      
                      <Alert severity="info" sx={{ mb: 3 }}>
                        Güvenliğiniz için güçlü bir şifre seçin. Şifreniz en az 6 karakter uzunluğunda olmalıdır.
                      </Alert>

                      <form onSubmit={handlePasswordUpdate}>
                        <Stack spacing={3}>
                          <TextField 
                            label="Mevcut Şifre" 
                            type="password" 
                            fullWidth 
                            required 
                            value={passwordData.currentPassword}
                            onChange={handlePasswordChange("currentPassword")}
                            disabled={loading}
                          />
                          <TextField 
                            label="Yeni Şifre" 
                            type="password" 
                            fullWidth 
                            required 
                            value={passwordData.newPassword}
                            onChange={handlePasswordChange("newPassword")}
                            disabled={loading}
                            helperText="En az 6 karakter uzunluğunda olmalıdır"
                          />
                          <TextField 
                            label="Yeni Şifre (Tekrar)" 
                            type="password" 
                            fullWidth 
                            required 
                            value={passwordData.confirmPassword}
                            onChange={handlePasswordChange("confirmPassword")}
                            disabled={loading}
                          />
                        </Stack>
                        
                        <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
                          <Button 
                            variant="contained" 
                            color="primary"
                            size="large"
                            type="submit"
                            disabled={loading}
                            startIcon={<SaveIcon />}
                            sx={{ 
                              px: 4,
                              py: 1.5,
                              fontSize: "1.1rem",
                              fontWeight: 600
                            }}
                          >
                            {loading ? "Güncelleniyor..." : "Şifre Değiştir"}
                          </Button>
                        </Box>
                      </form>
                    </Box>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* Başarı mesajı */}
      <Snackbar
        open={!!successMessage}
        autoHideDuration={6000}
        onClose={() => setSuccessMessage("")}
        message={successMessage}
      />

      {/* Hata mesajı */}
      <Snackbar
        open={!!errorMessage}
        autoHideDuration={6000}
        onClose={() => setErrorMessage("")}
        message={errorMessage}
      />
    </>
  );
};

export default ProfilePage;
